export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      labels: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          assigned_to: string | null
          created_at: string | null
          created_by: string | null
          email: string | null
          id: string
          label_id: string | null
          name: string
          next_follow_up: string | null
          notes: string | null
          phone: string | null
          status: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          label_id?: string | null
          name: string
          next_follow_up?: string | null
          notes?: string | null
          phone?: string | null
          status?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          label_id?: string | null
          name?: string
          next_follow_up?: string | null
          notes?: string | null
          phone?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_label_id_fkey"
            columns: ["label_id"]
            isOneToOne: false
            referencedRelation: "labels"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}